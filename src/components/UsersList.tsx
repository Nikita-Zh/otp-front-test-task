import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { useEffect } from "react";
import { fetchUsers, User } from "../features/usersSlice";
import { Button, Empty, Table, TableColumnsType, notification } from "antd";

const columns: TableColumnsType<User> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
];

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notification.error({ message: "Ошибка", description: error });
    }
  }, [error]);

  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey={"id"}
      pagination={false}
      loading={loading}
      bordered
      locale={{
        emptyText: (
          <Empty description="Нет данных">
            {error && <Button>Обновить</Button>}
          </Empty>
        ),
      }}
    />
  );
};

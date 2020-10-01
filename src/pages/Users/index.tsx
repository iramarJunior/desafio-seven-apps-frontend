import React, { useEffect, useState, useCallback, FormEvent } from 'react';
import { FixedSizeList as VList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CSSProperties } from 'styled-components';
import api from '../../services/api';

import { Container, SearchBox, User, UserBox } from './styles';

interface UserData {
  name: string;
  age: number;
}

interface ReactWindow {
  index: number;
  style: CSSProperties;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<UserData[]>([]);
  const [nameOrAge, setNameOrAge] = useState<string>('');

  useEffect(() => {
    api.get(`users`).then(response => {
      setUsers(response.data.data);
      setUsersFiltered(response.data.data);
    });
  }, []);

  const Row = ({ index, style }: ReactWindow) => (
    <div style={style}>
      <User>
        <div>
          <strong>{usersFiltered[index].name}</strong>
          <p>
            age:
            {usersFiltered[index].age}
          </p>
        </div>
      </User>
    </div>
  );

  const ListUser = () => (
    <AutoSizer>
      {({ height, width }) => (
        <VList
          className="List"
          height={height}
          itemCount={usersFiltered.length}
          itemSize={90}
          width={width}
        >
          {Row}
        </VList>
      )}
    </AutoSizer>
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      const filteredByNameAndAge = users.filter(
        user =>
          user.name.toString().includes(nameOrAge) ||
          user.age.toString().includes(nameOrAge),
      );

      setUsersFiltered(filteredByNameAndAge);
    },
    [nameOrAge],
  );

  return (
    <>
      <Container>
        <h1>List of Users</h1>

        <SearchBox onSubmit={handleSubmit}>
          <input
            value={nameOrAge}
            onChange={e => setNameOrAge(e.target.value)}
            type="text"
            placeholder="Enter a name or age"
            name="users"
          />
          <button type="submit">Search</button>
        </SearchBox>

        <UserBox>
          <ListUser />
        </UserBox>
      </Container>
    </>
  );
};

export default Users;

import { useContext } from "react";
import { FollowContext } from "../context/ContextProvider";
import { UserCard } from "../components/userCard";
import { UserCardSkeleton } from "../components/UserCardSkeleton";

export const Following = () => {
  const { users } = useContext(FollowContext);
  const usersFiltered = users.filter((user) => user.following === true);

  return (
    <div>
      <h1>Users following</h1>
      <div className="flex container flex-wrap gap-3 p-3">
        {usersFiltered.length ? (
          usersFiltered.map((user, key) => (
            <UserCard
              key={key}
              id={user.id}
              nombre={user.nombre}
              nombre_usuario={user.nombre_usuario}
              edad={user.edad}
              ciudad={user.ciudad}
              pais={user.pais}
              email={user.email}
              avatar={user.avatar}
              descripcion_corta={user.descripcion_corta}
              filled={user.following}
            />
          ))
        ) : (
          <>
            <h1>No users detected</h1>
            <hr />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

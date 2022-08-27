import React from "react";
import DataLoaders from "./../components/DataLoaders/index";

export const LoadersPage = () => {
  const loaderNames = () => {
    return fetch("/names.json").then((res) => res.json());
  };
  const loaderPhones = () => {
    return fetch("/phones.json").then((res) => res.json());
  };

  const renderName = (state) => {
    return (
      <ol>
        {state.data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    );
  };
  const renderPhones = (state) => {
    return (
      <ol>
        {state.data.map(({ name, id, price }) => (
          <li key={id}>
            {name} {price}
          </li>
        ))}
      </ol>
    );
  };
  return (
    <section>
      <DataLoaders getData={loaderNames} render={renderName} />
      <DataLoaders getData={loaderPhones} render={renderPhones} />
    </section>
  );
};

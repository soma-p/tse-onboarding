import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Page, TaskForm, TaskItem, TaskList } from "src/components";

export function Home() {
  return (
    <Page>
      <Helmet>
        <title>Home | TSE Todos</title>
      </Helmet>
      <p>
        {/* `<Link>` renders an `<a>` element with a correct `href` attribute
        but uses the react-router library's client-side routing so the new page
        loads faster (see https://reactrouter.com/en/main/components/link) */}
        <Link to="/about">About this app</Link>
      </p>
      <TaskForm mode="create" />
      {/* <TaskItem
        task={{
          _id: "foo123",
          title: "My title",
          description: "My description",
          isChecked: true,
          dateCreated: new Date(),
        }}
      /> */}
      <TaskList title={"All tasks"} />
    </Page>
  );
}

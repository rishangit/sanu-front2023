function Menu({ data }: any) {
  console.log("data.Menu", data);
  return (
    <div className="flex">
      {data.Items?.map(({Item}: any) => (
        <div className="px-3">{Item.Text}</div>
      ))}
    </div>
  );
}

export default Menu;

interface Props {
  title: string;
  count: number;
}

function Props({ title, count }: Props) {
  return (
    <div className="bg-blue-500 p-4">
      <h1 className="text-white text-lg">{title}</h1>
      <p className="text-white">Count: {count}</p>
    </div>
    
  );

}



export default Props;


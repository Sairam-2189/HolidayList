const cityList = [
["Goa","India"],
["Amsterdam","Netherlands"],
["New York","USA"],
["Darjeeling","India"],
["Tokyo","Japan"],
["Lonavala","India"]
];
//Goa(India), Amsterdam(Netherlands), New York(USA), Darjeeling(India), Tokyo(Japan), Lonavala(India)

const indiaCities = cityList.filter((pair) => {
 return pair[1] == "India"; 
})

export default function App() {
  return (
    <ol>
      {indiaCities.map((pair,i) => {
        return <li key = { "location"+(i+1)}>{pair[0]}</li>
      }
      )}
    </ol>
  );
}

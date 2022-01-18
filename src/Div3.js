import React from "react";
import Navbar from "./Navbar"

let link  = 'http://codeforces.com/contest/';

function Div3() {
  const [data, setData] = React.useState([]);

  React.useEffect(() =>  {
    const url = "https://codeforces.com/api/contest.list";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json["result"]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  });
  
  return (
    <>
     <Navbar />
     <div>
        <table className='table table-dark'>
          <thead>
            <tr>
              <td>Contest Name</td>
              <td>Contest Link</td>
            </tr>
          </thead>
          <tbody>
          {data.map((contests) => (
            <tr key={contests.id}>
              {contests.phase==="FINISHED" &&(contests.name.indexOf("Div. 3")!==-1)&&
                <>
                  <td key={contests.id}>{contests.name}</td>
                  <td><a className="link-light" href={link + contests.id}>Link</a></td>
                </>
              }
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    </>
  );
}

export default Div3;
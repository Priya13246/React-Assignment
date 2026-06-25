import React, {useState} from 'react'

const ProfileCard = () => {
    const[player,setPlayer]=useState({
        Name:"",
        Role:"",
        Country:""
    })
  return (
    <>
    <h2>ProfileCard</h2>
    <button onClick={()=>setPlayer({
        Name: "Virat Kohli",
        Role:"Batsman",
        Country:"India"
    })
    }
    >
        Virat Kohli
    </button>


    <button onClick={()=>setPlayer({
        Name: "MS Dhoni",
        Role:"Batsman",
        Country:"India"
    })
    }
    >
        MS Dhoni
    </button>

    <button onClick={()=>setPlayer({
        Name: "Rohit Sharma",
        Role:"Batsman",
        Country:"India"
    })
    }
    >
        Rohit Sharma
    </button>

    <button onClick={()=>setPlayer({
        Name: "Kane Williamson",
        Role:"Batsman",
        Country:"New Zealand"
    })
    }
    >
        Kane Williamson
    </button>
  
  <button onClick={()=>setPlayer({
        Name: "Pat Cummins",
        Role:"Bowler",
        Country:"Austraia"
    })
    }
    >
        Pat Cummins
    </button>
    <hr />

    <p>Name : {player.Name}</p>
    <p>Role : {player.Role}</p>
    <p>Country : {player.Country}</p>
</>
)
}

export default ProfileCard
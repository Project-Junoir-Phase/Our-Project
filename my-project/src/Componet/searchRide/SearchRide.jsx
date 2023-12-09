import React from 'react'
import SearchBar from '../SearchBar'
import RideDet from './RideDet'
import AllRides from './AllRides'

const SearchRide = ({rides }) => {
  const [localRides,setLocalRides]= useState([])
const [ride,setRide]=useState([])

  const fetchRides = ()=>{
    axios.get("http://localhost:3000/api/rides/getAll")
    .then((results)=>{
      setRides(results.data)
    })
    .catch((err)=>{console.log(err);})
  }
  const getOneRide = (ride)=>{
    setRide(ride)
  }
  useEffect(()=>{
    fetchRides()
  },[])
  return (
    <div>
        <p>navbar melfouk</p>
      <SearchBar/>
      <AllRides getOneRide={getOneRide} localRides={localRides}/>
      <RideDet  ride={ride}/>r
    </div>
  )
}

export default SearchRide

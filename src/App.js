import React, { useState, useEffect } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import { toast, useToast } from 'react-toastify';
import Spinner from "./component/Spinner";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //save data into a variable
      setCourses(output.data);

    }
    catch (error) {
      toast.error("Something went wrong...");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-bgDark2 min-h-screen flex flex-col">

      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>



    </div>
  );
}

export default App;

import React from 'react'

const Search = () => {

        const [data, changeData] = useState(
          {
              "name": ""
          }
      )
      const [result,setData]=useState([])
      const inputHandler = (event) => {
          changeData({ ...data, [event.target.name]: event.target.value })
      }
      const readValue= () => {
          console.log(data)
          axios.post("http://localhost:8006/search", data).then(
              (response) => {
                  console.log(response.data)
                  setData(response.data)
              }
          )
      }
      const deleteStud=(id)=>{
          let input={"_id":id}
          axios.post("http://localhost:8006/delete",input).then(
              (response)=>{
                  console.log(response.data)
                  if(response.data.status==="success"){
                      alert("successfully deleted")
                  }else{
                      alert("error in deletion")
                  }
              }
          ).catch()
      }
      
  return (
    <div class="card text-center mb-3">
    <div class="card-body">
        <h5 class="card-title">Search Student</h5>
        <p></p>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Admission No :</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
            </div>
        </div>
        <br />
        <button className="btn btn-warning" onClick={readValue}>Search</button>
        <br />
        <br />
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">SALARY</th>
                    <th scope="col">DEPARTEMENT</th>
                  
                </tr>
            </thead>
            <tbody>
                {result.map(
                    (value, index) => {
                        return <tr>
                            <td>{value.name}</td>
                            <td>{value.salary}</td>
                            <td>{value.departement}</td>

                            <td><button className="btn btn-danger" onClick={()=>{deleteStud(value._id)}}>Delete</button></td>
                        </tr>
                    }
                )}
            </tbody>
        </table>
    </div>
</div>

)
}


export default Search
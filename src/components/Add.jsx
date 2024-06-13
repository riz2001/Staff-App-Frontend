import React from 'react'

const Add = () => {
  return (
    <div>
            <h1 align="center">ADD DETAILS</h1>
    <br></br>
    <div className="container">
        <div class="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">

               
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control" name='id'/>
                        <br></br>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" name='name' />
                        <br></br>

                        </div>

                 

                    
                    <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                        <label htmlFor="" className="form-label">SALARY</label>
                        <input type="text" className="form-control" name='salary' />
                        <br></br>

                    </div>

                    
                    <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                        <label htmlFor="" className="form-label">DEPARTEMENT</label>
                        <input type="text" className="form-control" name='departement' />
                        <br></br>

                    </div>

                    <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                       <button className="btn btn-success">SUBMIT  </button>

                    </div>
               
              
               
                </div>
            </div>
        </div>
    </div>
    </div>



   
  )
}

export default Add
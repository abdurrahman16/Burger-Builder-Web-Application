import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    CardHeader
} from 'reactstrap';


const controls =[
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];

const BuildControl = props => (
  <div className="d-flex justify-content-between align-items-center px-3 py-2">
    <span className="fw-bold">{props.label}</span>
    <div>
      <button className="btn btn-outline-danger btn-sm me-2" onClick={props.removed}>Less</button>
      <button className="btn btn-outline-success btn-sm" onClick={props.added}>More</button>
    </div>
  </div>
)

    


const Controls = props => {
  return (
    <div className='container ml-md-5' style={{textAlign: 'center'}}>

    <Card style={{marginBottom: '30px', textAlign:'center',marginTop: '30px'}}>
            <CardHeader style={{backgroundColor:'#D70F64', color:'white'}}> 
                <h3>Build Your Burger</h3>
            </CardHeader>
                <CardBody>
                {
                   controls.map(item=>{
                    return <BuildControl 
                    key={Math.random()}
                    label={item.label}
                    type={item.type}
                    added={()=>props.ingridientAdded(item.type)}
                    removed={()=>props.ingridientRemoved(item.type)}
                    />
                   })
                }

                </CardBody>

            <CardFooter> 
                <Button >Price: BDT</Button>
            </CardFooter>
    </Card>
    
    </div>
  )
}

export default Controls
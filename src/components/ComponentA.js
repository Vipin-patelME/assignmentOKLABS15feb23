// 1. Import area

//1.1 import somedefaultimport from some location/library
import ComponentC from './ComponentC';
//1.2 import { somenamedimport } from some location/library
import {ComponentB } from './ComponentB'

//2 Component defination area

// 2.1 Functional Component defination

const ComponentA = props =>{
    //every function should return something

    return(
        <>
            <div className='comp-a'>
                <h1 className='intro'>{props.children}</h1>
                <ComponentB />
                <hr className='hrizontal-line' />
                <ComponentC />
            </div>
            
        </>
    )
}


//2.2 class Component Defination





//3. Export area

//3.1 Default export 
export default ComponentA;
//3.2 Named export 
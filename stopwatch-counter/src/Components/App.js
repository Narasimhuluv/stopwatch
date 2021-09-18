import React from 'react';
import Counter from './Counter';
import Stopwatch from './Stopwatch';
class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            
        }
    }

   
    render(){
        return(
            <div>
                <>
                    <div className="flex w-full justify-center mt-40">
                        <Stopwatch />
                        <Counter />
                    </div>
                </>
            </div>
        )
    }
}

export default App
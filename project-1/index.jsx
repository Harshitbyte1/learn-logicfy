import { createRoot} from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));


function Element(){
    return(
        <page />
    )
} 

function Pages(){
    return(
        <>
        <header>
             
            <img src="react-logo/react-logo.png" srcSet="" width="40px" />
            <h3>ReactFacts</h3>
            

        
        </header>
        <main>
            <h1>Fun facts about React</h1>
        <ol>
            <h1>Fun facts about React!</h1>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
        </main>
        <footer>
            © 20xx development. All rights reserved.
        </footer>
        </>
    )
}

root.render(
    <div>
        <Element />
        <Pages/>
    </div>
)
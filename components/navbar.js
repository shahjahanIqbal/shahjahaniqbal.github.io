// export default allows you to export a single value (in this case, a function) from a file, which can then be imported without curly braces


export default function navBar(){   
    return(
        <nav class = "nav-bar">
                <ul> 
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about me</a></li>   
                    <li><a href="">blog</a></li>
                    <li><a href="">resources</a></li>
                    <li><a href="">my bookshelf</a></li>
                </ul>
                
        </nav>
    )
}
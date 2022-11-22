function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}
let persons = (
    <div>
        <Person name="Karim" age="27" />
        <Person name="Rahim" age="28" />
        <Person name="Rahat" age="25" />
    </div>
);
ReactDOM.render(persons, document.querySelector('#app'));

/**
* 1. e.target.[name of the input field].value;
* 2. use form data action and formData in the action handler. formData.get('name of the input field)
* 3. controlled component.(one per each field) use state on change of the field use full to {}
*4 . handle all control field on one state object
const [fromData, setFromData] = useState({
    name: '',
    password: '',
    phone: '',
})

* 5. unControlled using useRef
*/
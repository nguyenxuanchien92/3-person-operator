function login(str) {
    let result = (str == 'Employee') ? 'Hello' : (str == 'Director') ?
        'Greeting' : (str == '') ?
            'No login' : '';

    console.log(result);
}

login()
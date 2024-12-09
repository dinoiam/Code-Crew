



document.addEventListener('DOMContentLoaded', async ()=>{

    const usersResponse = await fetch('http://dms.cyberdelia.eu/api/v1/user');
    const usersRaw = await usersResponse.json();

    let usersInPrison = usersRaw.filter(({ firstname, lastname}) => (firstname && lastname) );
    let freeUsers = [];
    const prison = document.getElementById('prison');
    const freedom = document.getElementById('freedom');
    const actions = { release: 'Scarcera', imprison: 'Incarcera'};

    const render = (users, judged) => {
        users.push(judged);
        populate(usersInPrison, actions.release, prison);
        populate(freeUsers, actions.imprison, freedom);
    }

    const judgeAction = (action, judged) => {
        if(action === actions.release){
            usersInPrison = usersInPrison.filter((u) => {
                return judged.id != u.id;
            });
            render(freeUsers, judged);
            
        }
        if(action === actions.imprison){
            freeUsers = freeUsers.filter((u) => {
                return judged.id != u.id;
            });
            render(usersInPrison, judged);
        }
        
    }

    const populate = (users, action, root) =>{
        
        root.innerHTML = "";

        users.forEach((user) => {
            
            const item = document.createElement('li');
            root.appendChild(item);
            const card = document.createElement('div');
            card.classList.add('card');
            item.appendChild(card);

            const firstName = document.createElement('h3');
            firstName.textContent = user.firstname;
            card.appendChild(firstName);

            const lastName = document.createElement('h3');
            lastName.textContent = user.lastname;
            card.appendChild(lastName);

            const actionBtn = document.createElement('button');
            actionBtn.textContent = action;
            actionBtn.classList.add('actionBtn');
            card.appendChild(actionBtn);

            actionBtn.addEventListener('click',() => {
                judgeAction(action, user);
            });
        });
    
    }

    populate(usersInPrison, actions.release, prison);
    

})
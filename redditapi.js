export default {
    search: function (searchTerm, searchLimit, sortBy) {
        // console.log('search....';)
         return fetch
         (`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
        .then(res => res.json())
        .then (data => {
            return data.data.children.map(data => data.data); 
            // console.log(data.data.children));
        })
      .catch(err => console.log(err));
  }
};
        
        
        
        
        //  with fetch api doing .then it gives response and i want it in json then another .then which gives the data then 
         //using backticks so i dont have to do any concatenation
        // making a console.log so i can check if its getting called.
        


// this is where im going to make my request

// reddit api docs 


// https://www.reddit.com/dev/api/

// Review later
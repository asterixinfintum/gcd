import urlMixin from '@/mixins/url.js'

export default {
    data() {
        return {}
    },
    mixins: [urlMixin],
    computed: {
        user() {
            return this.$store.getters.user
        },
    },
    methods: {
        authenticate(credentials, route) {
            fetch(`${this.baseUrl}/${route}`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => {
               //console.log(json)
               if (json.message === 'no such user') {
                return alert('invalid admin')
               }

               const user = json.user;
               const token = json.token;
               //console.log(user, token);
               this.setUser(user, token);
            })
            .catch(err => {
                console.log(err)
            });
        },
        setUser(user, token) {
            localStorage.setItem('nordtokenxtxtxt', token);
            this.$store.dispatch('storeUser', user);
        },
        getUsers() {
            const user_token = localStorage.getItem('nordtokenxtxtxt');
      
            fetch(`${this.baseUrl}/api/getusers`, {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization": user_token
                }
            })
            .then(response => response.json())
            .then(json => {
                  const users = json.users;
                  //console.log(users, 'the users are here')
                  this.$store.dispatch('storeUsers', users);
            });
          },
    }
}
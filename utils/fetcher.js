import axios from 'axios'
import auth from '../utils/AuthProvider'

const fetcher = url => axios.get(url,{
   headers: {
        "Authorization": auth.getBearer(),
        "Access-Control-Allow-Origin": "*"
   }
}).then(r => r.data).then(r => r.json());

export default fetcher;
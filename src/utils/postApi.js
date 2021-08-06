import tokenService from './tokenService';

const BASE_URL = '/api/items';

export function create(item) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: post,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }
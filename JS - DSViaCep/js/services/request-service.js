// service trata os serviços de requisição. É uma função auxiliar para fazer a requisição.

import RequestException from "./exceptions/request-exception.js";

export async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro ao realizar requisição");
  }
}

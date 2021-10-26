# nodejs-agetcall
### Nginx + nodejs app

En este repo encontrarás 2 configuraciones de nginx+app

- 1nginx_1_app : Compose de una aplicación node y un nginx.
- nginx_2_apps: Compose de 1 nginx compartido por 2 aplicaciones

### Aplicación node
Aplicación sencilla para generacion de tráfico con  envio de n (aleaorio entr [3-10]) peticiones GET a un objectivo (server) configurable.
Enpoints
| endpoint  | respuesta  |
|  / | "Hola, estamos en época de tregua  [ **$SERVER_NAME **]"  |
|*/**$SERVER_NAME**  * | "Enviando [ n ] peticiones al server >>------> $**TARGET_URI**" |
|*/**$SERVER_NAME**/atacked/m/n *  | "Recibiendo petición [ m de n]"  |

### Variables de entorno configurables desde compose

**SERVER_NAME**: nombre  del propio servidor
**PORT**: Puerto de despligue escucha de la app
**TARGET_HOST**: ip/nombre del host objectivo
**TARGET_URI**: uri del server destino sobre el que lanzar las peticiones


###NGINX
Activación de métricas para prometheus  /metrics :
```
location /metrics {
            stub_status on;
        }`

```
*nginx.conf*

Métricas disponibles [link](https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/ "link")




##Stack de monitorización

###kube-prometheus-stack

Stack completo de prometheus + grafana + alertmager<br> 
[https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)

####Requisitos e instalción de la imagen

    Kubernetes 1.16+
    Helm 3+
Repo del chart de stock

    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo update
Instalación

    helm install prometheus-stack prometheus-community/kube-prometheus-stack --version 19.2.2

Redirección para acceso a los servicios desplegados

    kubectl port-forward svc/prometheus-stack-grafana 8080:80
    kubectl port-forward svc/prometheus-stack-prometheus 9090
    kubectl port-forward svc/prometheus-stack-alertmanager 9093
###Blackbox exporter

Se añade Blackbox exporter (HTTP, HTTPS, DNS, TCP and ICMP.) para la generación tráfico sintético.

    blackbox-exporter-dashboard.yaml
    blackbox-exporter-values.yaml

[https://github.com/prometheus/blackbox_exporter](https://github.com/prometheus/blackbox_exporter)
[https://github.com/cablespaghetti/k3s-monitoring](https://github.com/cablespaghetti/k3s-monitoring "cablespaghetti/k3s-monitoring")
----
### Nginx ingress controller
Habilitar ingress controller para prometheus y catálogo de métricas disponibles de **NGINX**

[https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/](https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/)
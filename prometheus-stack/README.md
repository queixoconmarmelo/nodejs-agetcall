## Stack de monitorización

Despliegue de stack de monitorización para cluster de kubernetes los servicios albergados por el mismo, tomando
como basle el chart de stock de prometheus

Este proyecto está basado casi en su totalidad la guía del repositorio [cablespaghetti/k3s-monitoring](https://github.com/cablespaghetti/k3s-monitoring)

----
### kube-prometheus-stack

Stack completo de prometheus + grafana + alertmager     [/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) <br>
Chart mantenido por la comunidad de prometheus

#### Requisitos e instalción de la imagen

    Kubernetes 1.16+
    Helm 3+
Repo del chart de stock

    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo update
Instalación

    kubectl create namespace observability
    kubectl config set-context --current --namespace=observability
<br>
    From 17.x to 18.x -- Aplica en el caso de la versión 19.2.2

    Version 18 upgrades prometheus-operator from 0.49.x to 0.50.x. Helm does not automatically upgrade or install new CRDs on a chart upgrade, so you have to install the CRDs manually before updating:
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_alertmanagerconfigs.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_alertmanagers.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_podmonitors.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_probes.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_prometheuses.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_prometheusrules.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml
        kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.50.0/example/prometheus-operator-crd/monitoring.coreos.com_thanosrulers.yaml
<br>

    helm install prometheus-stack prometheus-community/kube-prometheus-stack --version 19.2.2 --values kube-prometheus-stack-values.yaml
    helm upgade --install prometheus prometheus-community/kube-prometheus-stack --version 19.2.2 --values kube-prometheus-stack-values.yml

Redirección para acceso a los servicios desplegados

    kubectl port-forward svc/prometheus-grafana 8080:80
    kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090
    kubectl port-forward svc/prometheus-stack-alertmanager 9093

** ***Nota*** Comprobar los svc previamente. En función de la versión de chart pueden variar.

<br>

**Problemas**

En caso dificultad con los ***crd***, revisar la sección de ***[Uninstall Chart](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#uninstall-chart)*** de repo del chart stock. 

### Blackbox exporter

Se añade Blackbox exporter (HTTP, HTTPS, DNS, TCP and ICMP.) para la generación tráfico sintético.

    blackbox-exporter-dashboard.yaml
    blackbox-exporter-values.yaml

[https://github.com/prometheus/blackbox_exporter](https://github.com/prometheus/blackbox_exporter)
[https://github.com/cablespaghetti/k3s-monitoring](https://github.com/cablespaghetti/k3s-monitoring "cablespaghetti/k3s-monitoring")

----

### Nginx ingress controller
Habilitar ingress controller para prometheus y catálogo de métricas disponibles de **NGINX**

[https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/](https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/)
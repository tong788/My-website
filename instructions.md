steps to publish image and run container

1. docker build -t my-website:v1 . (can change version based on your commit)
2. docker run --name my-website -p 5173:80 my-website:v1

access the service in the k8s cluster via 
minikube service my-website --url
the url will return like this  eg. http://127.0.0.1:50376/ 

steps to access the pod via k8s service
1. kubectl port-forward service/my-website 5173:80 (5173 is the port of local device, and 80 is the service port)
2. goto http://localhost:5173 (the number of port is based on the port forwarding)

To enable CPU-based autoscaling, apply the deployment and HPA manifests:
1. kubectl apply -f k8s/deployment.yaml
2. kubectl apply -f k8s/service.yaml
3. kubectl apply -f k8s/hpa.yaml

Minikube needs the metrics server for HPA measurements:
1. minikube addons enable metrics-server
2. kubectl top pods

To monitor autoscaling:
1. kubectl get hpa -w
2. kubectl get deployment my-website -w

steps to run a k6 smoke test against the port-forwarded website
1. keep the kubectl port-forward command running in another terminal
2. remove the old k6 container if it exists:
   docker rm k6
3. run the test:
   docker run --name k6 --add-host=host.docker.internal:host-gateway -e BASE_URL=http://host.docker.internal:5173 -v "${PWD}\k6:/scripts" grafana/k6 run /scripts/my-website.js

The current k6 script is a smoke test with one virtual user. To trigger CPU-based
scaling, use a sustained higher load, for example:
docker run --name k6 --rm --add-host=host.docker.internal:host-gateway -e BASE_URL=http://host.docker.internal:5173 -v "${PWD}\k6:/scripts" grafana/k6 run /scripts/my-website.js

The k6 image must be given `run` and a test script. Running only `docker run --name k6 grafana/k6` starts k6 without a test, so it prints its help text and exits with code 0.

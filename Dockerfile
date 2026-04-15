FROM --platform=linux/amd64 openjdk:25-ea
EXPOSE 8080
ADD backend/target/app.jar currywurst.jar
ENTRYPOINT ["java", "-jar", "currywurst.jar"]

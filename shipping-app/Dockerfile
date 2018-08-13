FROM microsoft/dotnet:2.1.1-aspnetcore-runtime

WORKDIR /app
COPY /publish .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet shipping-app.dll
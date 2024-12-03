import { AppRoutes } from "./presentation/routes"
import { AppServer } from "./presentation/server"


(async => {
  main()
})()

function main(){
  new AppServer(
      {
        port: 3000,
        routes: AppRoutes.routes
      }
    ).start();
}
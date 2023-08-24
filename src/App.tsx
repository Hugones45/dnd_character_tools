import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/login/Login"
import { Characters } from "./pages/characters/Characters"
import { Layout } from "./components/layoyt/Layout"
import { RandomTresuare } from "./pages/randomTresuare"
import { AskDragon } from "./pages/AskDragon/AskDragon"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Characters />
      },
      {
        path: "/randomTreasures",
        element: <RandomTresuare />
      },
      {
        path: "/askDragons",
        element: <AskDragon />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])


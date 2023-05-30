import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <section className='twitter-profile'>
            <TwitterFollowCard userName='Midu' alias="midudev" > </TwitterFollowCard>
            <TwitterFollowCard userName='Paco' alias="oliviarodrigo" ></TwitterFollowCard>
            <TwitterFollowCard userName='Tomas' alias="TMChein" ></TwitterFollowCard>
        </section>
    )
}
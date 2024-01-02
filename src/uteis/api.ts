import { ImageProps } from "react-native";
export const API_GitHub = 'https://api.github.com/users/';

/*
export const apiProps = ({ user }:propUser) => ({
    bio: user.bio ?? 'This profile has no bio',
    username: `@${user.login ?? 'not found'}`,
    followers: user.followers ?? 0,
    name: enShortText(user.name) ?? 'Has no name',
    following: user.following ?? 0,
    company: user.company ?? 'Has no company',
    blog: user.blog ?? 'Has no blog',
    location: user.location ?? 'Has no location',
    avatar: user.avatar_url ?? './src/images/user.png',
    repos: user.public_repos ?? 0,
    joinDate: formatDate(user.created_at),
    twitter: user.twitter_username ?? 'Not Available'
  })*/

  export interface githubData{
    login: string 
    id: string
    node_id: string    
    avatar_url: string 
    gravatar_id: string     
    html_url: string  
    followers_url: string 
    following_url: string   
    gists_url: string  
    starred_url: string   
    subscriptions_url: string   
    organizations_url: string  
    repos_url: string  
    events_url: string   
    received_events_url: string  
    type: string  
    site_admin: string   
    name: string 
    company: string  
    blog: string  
    location: string   
    email: string    
    hireable: string    
    bio: string  
    twitter_username: string    
    public_repos: Number      
    public_gists: string      
    followers: Number      
    following: Number    
    created_at: string       
    updated_at: string  
  }
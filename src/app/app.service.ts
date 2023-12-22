import { Injectable } from "@angular/core"
import { CardInterface } from "./dashboard/main/right-side-pane/card/card.component"


@Injectable({ providedIn: 'root' })
export class AppService {
    cardData: CardInterface[] = [
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc733',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/positive.svg',
            secondaryTitle: 'Positive',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'positive'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Disappointed',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'disappointed'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Anonymous',
            profileImage: 'assets/user.svg',
            team: 'Anon',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Very Happy',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'veryHappy'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc733',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/positive.svg',
            secondaryTitle: 'Positive',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'positive'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Disappointed',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'disappointed'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Anonymous',
            profileImage: 'assets/user.svg',
            team: 'Anon',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Very Happy',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'veryHappy'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc733',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/positive.svg',
            secondaryTitle: 'Positive',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'positive'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Disappointed',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'disappointed'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Anonymous',
            profileImage: 'assets/user.svg',
            team: 'Anon',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Very Happy',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'veryHappy'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc733',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/positive.svg',
            secondaryTitle: 'Positive',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'positive'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Patty Kerry',
            profileImage: 'assets/user.svg',
            team: 'Team A',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Disappointed',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'disappointed'
        },
        {
            id: '2bfe19e2-0ce7-466f-b635-fb728abfc734',
            title: 'Anonymous',
            profileImage: 'assets/user.svg',
            team: 'Anon',
            backdropImage: 'assets/disappointed.svg',
            secondaryTitle: 'Very Happy',
            description: 'I have done some work for somebody, but he is not satisfied, I still want the feedback from...',
            type: 'veryHappy'
        }
    ]

    tabsData = [
        { label: 'Very Happy', value: 90, cssClass: 'veryHappyTab' },
        { label: 'Disappointed', value: 80, cssClass: 'disappointedTab' },
        { label: 'Down', value: 70, cssClass: 'downTab' },
        { label: 'Positive', value: 85, cssClass: 'veryHappyTab' },
        { label: 'Neutral', value: 75, cssClass: 'disappointedTab' },
        { label: 'Optimistic', value: 88, cssClass: 'downTab' },
        { label: 'Ecstatic', value: 95, cssClass: 'veryHappyTab' },
        { label: 'Disappointed', value: 80, cssClass: 'disappointedTab' },
        { label: 'Neutral', value: 75, cssClass: 'downTab' },
        { label: 'Optimistic', value: 88, cssClass: 'disappointedTab' },
        { label: 'Ecstatic', value: 95, cssClass: 'veryHappyTab' },
        { label: 'Disappointed', value: 80, cssClass: 'disappointedTab' },
        { label: 'Neutral', value: 75, cssClass: 'downTab' },
    ]
}
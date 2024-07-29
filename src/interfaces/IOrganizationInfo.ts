export interface IOrganizationInfo {
    logo: string;
    img_background: string;
    name: string;
    sport: string;
    sport_type: string;
    // region: IRegion;
    region: string;
    number_of_athletes: number;
    number_of_subscribers: number;
    number_of_leagues: number;
    medals: IMedals;
}

// interface IRegion {
//     country: ICountry;

// }

// interface ICountry {
//     logo: string;
// }

interface IMedals {
    golden: number
    silver: number;
    bronze: number;
}
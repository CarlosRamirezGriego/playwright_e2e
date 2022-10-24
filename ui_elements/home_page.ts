export function MainLinks_HomePage(isWeb: boolean){
    if(isWeb)
    {
        return{
            POKEMON_DATA_LINK: '.main-menu-list>li:nth-child(1)>a',
            POKEMON_DATA_LABEL: '.main-menu-list>li:nth-child(1) .main-menu-title-long'
        }
    }
    else
    {
        return{
            POKEMON_DATA_LINK: '.main-menu-list>li:nth-child(1)>a',
            POKEMON_DATA_LABEL: '.main-menu-list>li:nth-child(1) .main-menu-title'
        }
    }	
}
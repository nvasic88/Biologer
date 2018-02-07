<?php

return [
    'id' => 'ID',
    'actions' => 'Akcije',

    'login' => [
        'email' => 'Email',
        'password' => 'Lozinka',
        'forgot_password' => 'Zaboravili ste lozinku?',
        'remember_me' => 'Zapamti me',
    ],

    'register' => [
        'first_name' => 'Ime',
        'last_name' => 'Prezime',
        'email' => 'Email',
        'password' => 'Lozinka',
        'password_confirmation' => 'Ponovite lozinku',
        'verification_code' => 'Verifikacioni kod',
    ],

    'forgot_password' => [
        'email' => 'Email',
    ],

    'reset_password' => [
        'email' => 'E-Mail adresa',
        'password' => 'Lozinka',
        'password_confirmation' => 'Potvrdite lozinku',
    ],

    'users' => [
        'first_name' => 'Ime',
        'last_name' => 'Prezime',
        'roles' => 'Uloge',
        'curated_taxa' => 'Taksoni koje uređuje',
    ],

    'taxa' => [
        'rank' => 'Kategorija',
        'name' => 'Naziv',
        'parent' => 'Roditeljski takson',
        'native_name' => 'Narodni naziv',
        'description' => 'Opis',
        'fe_old_id' => '(stara) FaunaEuropea ID',
        'fe_id' => 'FaunaEuropea ID',
        'restricted' => 'Da li su podaci ograničeni?',
        'allochthonous' => 'Da li je alohton?',
        'invasive' => 'Da li je invazivan?',
        'stages' => 'Stadijumi',
        'conservation_lists' => 'Konzervacione liste',
        'red_lists' => 'Crvene liste',
        'add_red_list' => 'Dodaj crvenu listu',
    ],

    'field_observations' => [
        'taxon' => 'Takson',
        'date' => 'Datum',
        'year' => 'Godina',
        'month' => 'Mesec',
        'day' => 'Dan',
        'photos' => 'Fotografije',
        'upload' => 'Otpremi',
        'map' => 'Mapa',
        'latitude' => 'Geografska širina',
        'longitude' => 'Geografska dužina',
        'accuracy_m' => 'Preciznost/Prečnik (m)',
        'accuracy' => 'Preciznost',
        'elevation_m' => 'Nadmorska visina (m)',
        'elevation' => 'Nadmorska visina',
        'location' => 'Lokacija',
        'details' => 'Detalji',
        'more_details' => 'Više detalja',
        'note' => 'Beleška',
        'number' => 'Broj',
        'sex' => 'Pol',
        'stage' => 'Stadijum',
        'time' => 'Vreme',
        'observer' => 'Uočio',
        'identifier' => 'Identifikovao',
        'found_dead' => 'Jedinka nađena mrtva?',
        'found_dead_note' => 'Beleške o mrtvoj jedinki',
        'data_license' => 'Licenca podataka',
        'image_license' => 'Licenca slika',
        'default' => 'Podrazumevano',
        'choose_a_stage' => 'Odaberite stadijum',
        'choose_a_value' => 'Odaberite vrednost',
        'click_to_select' => 'Kliknite kako biste odabrali...',
        'status' => 'Status',
    ],
];
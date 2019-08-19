import React from 'react'
import { CSSTransition } from 'react-transition-group';

import './About.scss';

import SecondHeader from './Partials/SecondHeader';

export default function About(props) {
    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
            <div className="container">
                <div className='about'>
                    <SecondHeader title="O aplikaci" />
                    <label className='jpBtnSm' onClick={() => props.history.goBack()}>Zpět</label>
                    <div className='textContent'>
                        <h3>Použité technologie</h3>
                        <p> Aplikace je postavena na knihovně React a jejích rozšiřujících modulech (Router, Transitions atd.), ke stylování prvků byl použit CSS preprocesor Sass. Aplikace je plně responzivní.</p>
                        <h3>Účel aplikace</h3>
                        <p> Aplikace byla vytvořena jako ukázkový projekt pro práci s knihovnou React. Návrh aplikace je takový, aby zobrazovala využití základních i pokročilejších funkcionalit knihovny React.</p>
                        <hr />
                        <h3>Funkce aplikace</h3>
                        <ol>
                            <li>Vytvořit plány</li>
                            <li>Uložit plány</li>
                            <li>Načíst, editovat a mazat plány</li>
                            <li>Zobrazit katalog profilů(polotovarů)</li>
                            <li style={{ color: '#d14545' }}>Vytvořit nářezový plán - Nezapracováno</li>
                            <li>Zobrazit sumarizaci plánu</li>
                            <li style={{ color: '#d14545' }}>Vygenerovat PDF s nářezovým plánem</li>
                        </ol>
                        <p> 1) Aplikace umožňí založit kusovník s položkami pro řezání ke konkrétní zakázce. Polotovary které je možné řezat vybere uživatel z katalogu </p>
                        <p> 2) Aplikace neobsahuje persistentní vrstu, umožňuje však dočasné uložení dat prostředníctvím "Local Storage". Práci s "Local Storage" umožňuje třída Storage. Změnou této třídy může být ukládání dat rychle a jednoduše nahrazeno např. za ukldání do databáze prostřednictvím back-end API</p>
                        <p> 3) Aplikace umožní opětovné načtení vytvořeného plánu a umožní jeho editaci tzn. změnu údajů položek k řezání, mazání vč. smazání celého plánu z uložiště</p>
                        <p> 4) Přehledné zobrazení všech profilů, ze kterých je v aplikaci možné vybírat a tvořit plány</p>
                        <p> 5) Po vytvoření plánu a jeho uložení bude automaticky vygenerován nářezový plán. Na nářezovém plánu budou zadané položky k řezání umístěny na zvolené polotovary.</p>
                        <p> 6) Po uložení obdrží uživatel jednoduchou sumarizaci o založeném plánu a informaci o jeho uložení</p>
                        <p> 7) Součástí sumarizace bude tlačítko pro vygenerování nářezovéhoé plánu ve formátu PDF jako podklad pro operátora dělícího zařízení</p>
                        <hr />
                        <div className='contacts'>
                            <p>Aplikaci v roce 2019 vytvořil Jiří Patroch</p>
                            <div className='contactIcons'>
                                <a href='https://github.com/JiriPatroch'><i className="fab fa-github-square"></i></a>
                                <a href='https://www.facebook.com/digi.deer.9'><i className="fab fa-facebook-square"></i></a>
                                <a href="mailto:jiripatroch@gmail.com"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition >
    )
}

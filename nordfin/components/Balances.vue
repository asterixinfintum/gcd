<template>
  <div class="balances">
    <section class="balances__header">
        <span :class="{
            current: view === 'balances'
        }" @click="toggleview('balances')">balances</span>
        <span :class="{
            current: view === 'deposits'
        }" @click="toggleview('deposits')">deposits</span>
        <span :class="{
            current: view === 'withdrawals'
        }" @click="toggleview('withdrawals')">withdrawals</span>
        <span :class="{
            current: view === 'fills'
        }" @click="toggleview('fills')">fills</span>
        <span :class="{
            current: view === 'conversions'
        }" @click="toggleview('conversions')">conversions</span>
        <span :class="{
            current: view === 'collateral explainer'
        }" @click="toggleview('collateral explainer')">collateral explainer</span>
    </section>

    <section class="balances__toparea" v-if="view === 'balances'">
        <div class="balances__toparea--btnsarea">
            <div class="balances__toparea--btnsarealeft">
                <span>all balances</span>
                <span>crypto</span>
                <span>fiat</span>
            </div>
            <div class="balances__toparea--btnsarearight">
                <span class="completeverification">complete id verification to deposit by card</span>
            </div>
        </div>
        <div class="balances__toparea--svgs">
            <div class="balances__toparea--svgsleft">
                <p>Balances</p>
            </div>
            <div class="balances__toparea--svgsright">
                <span></span>
            </div>
        </div>
        <div class="balances__toparea--labels">
            <span>Coin</span>
            <span>Balance</span>
            <span>Available Balance</span>
            <span>USD Value</span>
        </div>
    </section>

    <section class="balances__row" v-if="view === 'balances'">
        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAOVBMVEVHcEx47Bdu4Ahs4Ahs3wds3wds3wds3gds3gds3gdw4wh84iL///+i6mKQ5kS68IvU9bb2/fDk+dHhfN8nAAAAC3RSTlMACjlLhavA1u3/HBWfViwAAAO1SURBVHgBvNKHYQQwCANAY6q8/8AZIF+x+BuAqtUiW80jMguozAg33bJ+QtSi8FCFqYw3xxuDQ2wrfKRsL7pjiS+kHe7yjq/55rUPtARnBA20hd7/3nHFL7NghUtlN89PEGQ7CgYS630/QBONJGiBqHT+/NQ3iIPO5Yv+gQHx8QQnMSIOtX9DHn5//gSSGJTCzx85iY5h/serGWw3jMIAsLHZ1IoAJP7/Y/dCXzZL62pqXubUW6ZYEgjxzvrDK9IuCM2DIoD9JAGOdwgcP6fCXd4hIHcQAEDgehhs8i4B2b4VgBVIa2l50BTWo6sfQIt5fqVbARbpUgZUy9/Tm+JM4CWw9HxCr6gg8hKkln+hF1COcAmons8Aq3D/UwqWHKMpSEWwADVH8cqWYFv8+9nhEsRSoE8/4/kHGkuEh/AAcCsq9vX3/0y6RHjAIuhzmH0JiNTW85MKy+EnXoAi8irwUiAb3BE2iWAvvz8LPKuUq8TY0BfIT0wmgYH2oUe+we0I7/2DMgk8KW4S5biNbYAWAT0REFV6Pk04CeVMgJBAGW5AgB1Pb3wf0lUCcoufBGokCAcsCBIX8GUCCXQj+T8YFjgJgkNi2IuBrhE4RgyCNBh4UyJwEoUbboMGbnWBwAY68jafe/yywA4aIvU8cVkgnZzGwJm41b/f2NzlosHAmopw7khAWj7DinAB0JQHOiPHy/CJbwUsE4WAwCGQ2n9RKKwUCqdYPsUEMAQg2jyf0BUIHPI3ausrDI4pCAFaHHwFlgV0i55oYYH7AgGfQ8KVV0LMa3PqdAmGwD9rBES0wR1ybEZpkcCo07xF39cJiDr+BvvHtlBACs7E7eO2RmC+RurR1uhYKWAwCg/QmIQEWn4SbUwS2IgrEPBoa7aTU3GLC/Roc3pD620aDUILxmA4CMpX3T8RqLAO3MEVjc5nrlmAXlYmcEnV55nEJGB0L9jHNR3vCLzVSaB2uhset/BFZckTbq0+BbQYPw+k+FWt5VPM8wCNMjdwWV08E4yNL9OScRmeFyQ6sPAcAJzKH3hq2WIKpnh2uYksU/DCR+hkTy6d//uByeWGGsO+ojnfptEtcrBZwlu98I5jF0wtLQ96K1UFsfPxPX/Cgd4zPY71AuwpT3qnQOKPWJYK/Fu8HdQAAMAgDHySzL/gqWgOBQjozWc8PmTyKZeP2XzO54NGn3T6qNVnvTpsBmm3fLDzeb8FDph4aOSimQ+GTpp6YeymuR8Gj5h8YvSK2S+Gz9Es/fb4PeH/D/uo4cAfui4KAAAAAElFTkSuQmCC"/>
                </figure>
                <span>USD (USD)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEVHcEwrp38no30monsmoXsmonsmoXsmonsmoXt4xa3F5txPs5S84tb///+h1sbl9O8Up7fVAAAACHRSTlMAF0KFq8DW7SwUkHwAAAM7SURBVHjaxZvrsqsgDIUh3IJQfP+3Pdo908xhLIpS1pr9r93N5yJEFKJuSRMZ65z3gTl475w1RFpNkSbjAh8qOPNrCjKOT7RB/C564EsKv2DQxnOHvBk7FmS5W5bGhXd8S44GhochaMuPZB/mggn8UME8cd/zAHm6ffk8SPdM0I6Hyekb9gceqEAP7IcMg+XhsjeHH5EI2jPjCCT+eHmNjC8E5/GhBI5/Kjd9/tWy3fVnakUiniBqJGDgCQoak4AiB0oAkWkmAC4NPE+TBw2AyPTMgLjcVmrMhOslML9uK/I32Y4MLIMA2nnoeK4D7GoDZjvAVBkw14HaAuLJDtQWWJ7rQD0RNCMcYF0VwYkO1OXQYxzwkoIYB5hkBBAOyBgElAPh2kIk5k1L9VdTrUffyYnbogcLgQogP1gWOByAkyo0HUBqEWEAJAkMBkCSwGEAJAkCEiBIDmIAWCvCAlAvQEoxlpKX5VVpybmUGFPqBTBXI8eS163krrnsgWIdP/6B7V9Zconp8jSwV2Jvodf9V9OVIdg92kDWSxT2dBbGvMWOqTsH0kaxQZwxuDZAlN/oBBD6ktoAvmH95mN8OgvK9lkDwVcA9b8+mYZyGa/UAAj8RXueD6kD8dUgCIq/aRkJEPmbVHMtuqQHABK/NQYqNC1YS3oGkPL+aWncjfzZenw5rifrKtF30MPoZX1/GPtmgSj9IUgluq6U9sot4b8DuLNC+LnI5dK9JqW43xI+zqS7lVD0vhbRui7v+1GlUnJeZFzEtzMA23EvPJeYla5uH5jexcD/11lZk0vsSxczakW08D0RfEkGX5Sil+XwBxP4oxn+4RT/eI5/QYF/RUM4AFJvBRRAkBeVCAB5UUkgANkx8BgA2b40GAAjGxYYAK0+sggAq0SEAKBq224uQL1zSfMBqNq6nQkgBohoNgCpSnYugH18hKcGeH6Ux8wEMOpAfh6AV0eieQCkDmVmARj1RW4OgBtymC1W6p0B+ON8nWkwTgZ/pBN/qLUt/9P4Gn2wGX+0G0gg8c8FON4PaHDAtXjgm1zwbT74Rid8qxe+2Q3f7odveMS3fOKbXvFtv/jGZ3zrN775Hd7+/w85Ibdm0jv/1gAAAABJRU5ErkJggg=="/>
                </figure>
                <span>USD Tether (USDT)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEz/miT5lRv5lBr4lBr3kxr4kxr4kxr3kxr9lxz937z6w4D4pkL++PH////+7Nf6tGH80Z1gLiRMAAAACnRSTlMADz9ehavC4f8dTtIi3wAAA9xJREFUeAG804mBBFEEBFA0VSX/hDeAnfM38wJwsyMeVxZAUiIJVF7h9hMeCeohIreriITeQMZeduozGzV0Ul9gtk2K0tcq5tJDRxD76fdL6NIt1XbLpbuYdi6oAQw7lBqSdqKhMej98U+vITXoYA2lcWWfc2gBfP/8ZipoagnbPuDUGvr8/se3AK3C/P/NfmNq2R+t5oH0OAhD4QQ3Amrc/7BbwraM/dtPMvumepo16EMNXUSklJ0qpVJ2Ko28gCwiXOqoy+gGkKSLxoDoB6DKW/r+MNgdMwYAoNINaO+P1t1BYQwCEZC7Afb+0P7REAxwBzgQkC4LOuGVu+IISFeG9IqFwKbN6ASBbg2iJURgdzM3IxQBnEMsBMhvaTOKItC1Rg7A5F+xBhHoSoEDaHKk4kWgaw3EIJUD9ejjQqAr+asA+VrsQaBr8ceAWlgulB16RYIgVZUzNcqw5mAWMDmVVrgwiKbBKufiimIYTUNyJTWXD7axBuDXcQsWIvRJ3fHdUNwHc77DgO3vBm7BHCtFy9HFp8b7EA2F42ewEOvSk1QBXIbnfQQ+IgR7nZAGIHBigQEQ3EXgNEY1CIJtEAJd7MNwAxiEEdiXDIpQmEYh0FXcFE4jEIifwPSYhyJA3lA0P5ahCDRvJFoe60gETD5ESDBe7yAgn61a86ej1R0G+KAqb9Ws7rNyhUqCLYYAIM3/w4AqqJgwA+IIAP8H9IggAKhkUI8tjsCXxnAxvDfY7kQB26GP4Y8bACQCawcFKeEGrAMSwb4gZXxQso5JBDUQhboBy6BEQE0+ZeCQYI4jcJ6JFGwPp2G1QLaAE6ZHiiOwU4l0h88wApeZijLUGm1xBHZiL4Yb1JiQNtv5WK/neIZ1pzM2n9RSrrse9lHYW7MUy4B2Xa0Y1pw+YzUIMMolhEEAAkXrLfo8KkbnxXNkLMha7fz/UtARTQoXYeWfotxaoCpIwMIAyYVYS1ENjY03aFDZx3B+NcgDiA+CRhDmAXxU6jSiAR7wj+upjGyL5sCjJWoAk+/xcnFWJK3p+f/N+XaZ/I/FVL8+DSX3u93qqkj4NEJoDbxcpsC+QP39v1b434lF7O129SBQ99YQmRlRfI8j+fcFGM760BLFEkWABu0zvaII5JBe+AoxhMCQdaptPAIggc6kOACBdGORiWq9jcA8YpXrBgIrsMwGlwcW3ywFMACMoGEAfG/eDq4AgAAYigGw/8Km6IsV2uuPDxp90umj1j+y3nJB2EzSbvDCqj7v98DBEw+PXDzz8dCJUi8wQvfcz4NHTz49epXsF8DnHcPXNU+/NX4H/P8BC2PKINdSx6oAAAAASUVORK5CYII="/>
                </figure>
                <span>Bitcoin (BTC)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAHlBMVEVHcExifutkgOxifutifutifurAy/b///+Bl+6hsvK9JwfqAAAABXRSTlMAuT/fhRZUC3MAAAOZSURBVHjaxZsBsuQgCEQDKoH7X3jr79QWOz9mBmhn7AvwQqNR0aMm5k5ErbUxWmtE1JmPL4k7tTFVo86fDz7e6IMQ3NuIqfOm6K62mIFppEW8ODyEgIffh0ADEoHh+4DVkey3sUCNwc/H1UH3cRGaflwMpH+LDTSWiz4V33Q9Qcr+U8Lj8SPlJ6cYQAB/v56nyAAIwPhDfgAMIADr384fAFFgLGDj73wACDAaoflH/gHYohmJR0p6PgBSJgxeN/+fDmAjrmUFYA6QSgHBBeAJcADBf0w8cpJnAIN/zi1rgANkTWjLDHAA3ISsAVcAhUYCFaYABwBGAlCBDgDUITIFOACeAi5UoAO4yimgggEOUDKB4J+QA9RMYDQBDoCnoFCBLsFT0AEDHCBdh72+Dr0HKK1QGUiAAxRM4JID5zsASXsAVOAUQJMecMkAl9RTwHkHJAJgOQ8IMGAOILkdO1CBDlA0IVsCEgWwRBH0TAVGASRRBIQmwEop8CJoaAWqWrkOW6oGb7KvOkWIViEXDXDz9a+sZgLHAfQS3QGmDBoD6CUDngK5LJ2CfhCwEHeAKYKGhgEBOyEHmCOsBJAXE/9vmcVNoKNlDJCZdCKLmtCCAB4+AuAIqwDEw0cAHMHeA8QqUF5Ib2X2PgUhAJEkgOttCmIWWBlgVRFqDWDEihBEKIV3ABqumg9AfJ8JQ1JLAAwXDqAvfSiFd4Ae8l/dhwhAvKfXD47NhHZfCi/Ci6ErIidwBH0N8P+4scjGILwccB/0HuC5YiOL0sz/WKY+zLMf/RsfuRWJTYbkNPvR9Uhia3Y+dPXhJrxIcGvGyWX5ZUhes/9Q+IQi3yJ5jjUPLxpuG1B6a/Q8JGfZF7H4AUWvNCnUQ+r0Z5E4ouERJ5ghzMdm5qCw1fan9mLBYKmj0l7doetNeLHcQSWXD2lE5ysFTR6Xt/o5nbj5Ls22LztyUGYqv2T57uWew+rDRTuO6+lw8cqGRalvRwBBKb4nAD+yB47qqymwewCtdq/5251Thtr3eO+YwAsMOgcYYcFXOAy7wNAPF9y+BFqWSB3qFQC+zdVrBLABLvrORSZadZnNAZACwMug1LJ24WMRLAC8DMACwKdkbArGrxWfyYY9QIDcK/b46wmg+DiBApfbN1zv3/rAYfcTj72PXBojb8xwtd0PnXY/9dr92A0TDUi0+8Hj5iefux+9LhX87BcX97Y8+v6n3/sfv29//v8HwRsN0ET2sBAAAAAASUVORK5CYII="/>
                </figure>
                <span>Ethereum (ETH)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QzRCOTk4NEE4NjExRUNBRDY5Q0JGRDMzMkQzMUI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QzRCOTk5NEE4NjExRUNBRDY5Q0JGRDMzMkQzMUI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTRDNEI5OTY0QTg2MTFFQ0FENjlDQkZEMzMyRDMxQjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDNEI5OTc0QTg2MTFFQ0FENjlDQkZEMzMyRDMxQjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Cde1oAAAMpklEQVR42uxdCWxU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"/>
                </figure>
                <span>Litecoin (LTC)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="@/assets/imgs/sollogo.webp"/>
                </figure>
                <span>Solana (SOL)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,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"/>
                </figure>
                <span>HUSD (HUSD)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>

        <div class="balances__balance">
            <div class="balances__balance--label">
                <figure class="balances__balance--logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEVHcEwRkv8QkfoPkPkPj/kPj/kPj/kPj/gPj/hQrfpzvvuc0fzH5f3l8/7///8vnvkYWOutAAAACHRSTlMAGT9piLHM65hJgrkAAAMaSURBVHja1ZtZcuwgDEUNBiEGwf53m0p+XlEvbVtDtypnA9xC14A1HCJCPFPOAKUglgKQczpjOD5CiAkK/kqBFI/3EhPgDW8UEVPBR5R3aAgJkAEkW0fEjGxyNF7eTUIEFAN6CSGjiqz0wllQy2m0+x5xSGhEkkUf0AwQOCEWNKRE8fY7hSGjOVn58evJQWs/vRX91t8V6Ne3V7Cv76og41vJjPVdFCTUoD+RIn6AeGHAgh+gvDYi4EcApQH0JEsD1NbHGERzEtHovdUltQEgl9Zp/gKNVgVBOJFH7fMKvORUfwGN5jV4TdAdgXXMqROQNQ5cfd7D9SEw1qdpIADEG1BpWgjAKHRAnc/gXYtRtf7orda1Vq2tD/ongLEFWR7/Uf/T+HM8sV4GAZ9Cc6evV4cU3hP4t9CYG1SN7iSQGWAso2s5ygIwUEtkRqDt+2/3LiiiL2ChmsKLwH4DNLv3aZI4gAzfZiBxQDN8nkrOAEIbGBZY+wmINsRHFljf7Bas6wqeCQDvmEwazwTl3n1MFuskCAz3XSD1R7j3YJ1MKs+F5/0ByIOYufTkYMHtM8jWFkQW+VbAoB/2Xb6gcwWA4C2EdoBEAJkKKJyr0F5A8ReAvgLQXcCf9MC0FPAnzgGaD+kSARntHiRLkr3Pdg+SgRIBCW9YjIuYTzJ8kJCsuB89LYgYj+BgwT1NUxwsuP2gg+Tf2LJ4kuTZAT1J+nNKlhU0UYquoglBnKAYhgmKxIiBsQuSIklFhkXUItqCjmoKM1HZrYOQmKnaNXeqOgLcZHW3VQDqdP1sRun6IC6YUH1R2CNWweLI8pIRtYU7tQ9WyWa3oeR9RFvVSlS0OjJbgb5sJy1cNiMBUVy6bSYCQFO8HgYCoqp830grICsbGFbXCShB38LRrgJBXdBsDMik9vGih2UxHKhs41lbF8941sWD0buRybuVy72Zzbudz7uh0b+l01VB9m/rdVTg31pdgndzu3d7v/OAg/eIh/eQi/eYj/Ogk/eol+uwWzm9x/2cBx6dRz7dh179x379B5/9R7/tMR5+dx///wJnq77BFTcMMQAAAABJRU5ErkJggg=="/>
                </figure>
                <span>Euro (EUR)</span>
            </div>
            <span class="balances__balance--area"><span class="mobilelabel">Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">Available Balance</span>0.00</span>
            <span class="balances__balance--area"><span class="mobilelabel">USD Value</span>US$0.00</span>
            <button class="verification">COMPLETE IDENTITY VERIFICATION TO DEPOSIT/WITHDRAW</button>
        </div>
    </section>

    <section class="balances__records">
        <Record 
            v-if="view === 'deposits'" 
            :labels="['time', 'coin', 'amount', 'status', 'additional info']" 
            :records="[]"
            :header="'Deposits'"
            :btnlabel="'Make a deposit'"/>

        <Record 
            v-if="view === 'withdrawals'" 
            :labels="['time', 'coin', 'amount', 'destination', 'status']" 
            :records="[]"
            :header="'Withdrawals'"
            :btnlabel="'Make a withdrawal'"/>

        <Record 
            v-if="view === 'fills'" 
            :labels="['time', 'market', 'side', 'order type', 'size', 'price', 'total', 'fee', 'TWAP']" 
            :records="[]"
            :header="'Fills'"/>

        <Record 
            v-if="view === 'conversions'" 
            :labels="['time', 'from', 'to', 'size', 'fee', 'price', 'proceeds', 'status']" 
            :records="[]"
            :header="'Conversions'"/>


        <section v-if="view === 'collateral explainer'" >
            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['coin', 'total balance', 'balance available as collateral', 'approximate fair', 'collateral weight']" 
            :records="[]"
            :header="'Collateral contribution of positive balances'"/>

            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['coin', 'amount']" 
            :records="[]"
            :header="'Staked balances'"/>

            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['coin', 'amount']" 
            :records="[]"
            :header="'Lent balances'"/>

            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['coin', 'amount']" 
            :records="[]"
            :header="'Balances locked in open orders'"/>

            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['coin', 'balance', 'size from open orders', 'position', 'mark price', 'position value', 'additional collateral used']" 
            :records="[]"
            :header="'Negative balances (including open orders)'"/>

            <Record 
            v-if="view === 'collateral explainer'" 
            :labels="['ticker', 'quantity', 'size from open orders', 'position', 'mark price', 'margin fraction required']" 
            :records="[]"
            :header="'Positions (including open orders)'"/>
        </section>

    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            view: 'balances'
        }
    },
    methods: {
        toggleview(value) {
            this.view = value;
        }
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.balances {

    &__header {
        text-transform: uppercase;
        font-size: #{scaleValue(15)};
        margin-bottom: #{scaleValue(15)};

        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(60)};
        }

        & span {
            display: inline-block;
            text-align: center;
            padding: #{scaleValue(16)};
            position: relative;
            margin-right: #{scaleValue(16)};
            cursor: pointer;
            font-weight: 600;

            @media only screen and (max-width: 414px) { 
                display: block;
                text-align: left;
                padding: #{scaleValue(40)} #{scaleValue(16)};

                margin-bottom: #{scaleValue(30)};
            }


            &::before {
                content: "";
                left: 0;
                bottom: 0;
                position: absolute;
                background: transparent;
                border-radius: 3rem;
                height: #{scaleValue(4)};
                width: 100%;
            }

            &.current {
                color: #00B4C9;

                &::before {
                    background: #00B4C9;
                }
            }
        }
    }

    &__toparea {

        &--btnsarea {
            display: flex;
            text-transform: uppercase;
            font-size: #{scaleValue(12)};
            justify-content: space-between;
            align-items: center;

            padding-left: #{scaleValue(140)};

            & span {
                border: .5px solid rgba(#fff, .6);
                padding: #{scaleValue(14)};
                border-radius: .6rem;

                display: inline-block;
                margin-left: #{scaleValue(15)};
                cursor: pointer;

                &:nth-child(1) {
                   /*color: #00B4C9;
                   border: .5px solid rgba(#00B4C9, .6);*/
                }

                &.completeverification {
                    background: rgba(#00B4C9, .6);
                    border: .5px solid rgba(#00B4C9, .6);
                }

                @media only screen and (max-width: 414px) {
                    margin-bottom: #{scaleValue(57)};
                    padding: #{scaleValue(30)};
                }
            }

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(57)};
                flex-direction: column;
                align-items: flex-start;
            }
        }

        &--svgs {
            font-size: #{scaleValue(18)};
            margin-top: #{scaleValue(35)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(70)};
            }
        }

        &--labels {
            font-size: #{scaleValue(12)};
            margin-top: #{scaleValue(20)};
            color: rgba(#fff, .5);
            display: flex;
            align-items: center;
            padding-bottom: #{scaleValue(12)};

            @media only screen and (max-width: 414px) {
                display: none;
            }

            & span {
                display: inline-block;
                width: #{scaleValue(200)};

                &:nth-child(1) {
                    width: #{scaleValue(400)};
                }

                &:nth-child(5) {
                    
                }
            }
        }
    }

    &__balance {
        display: flex;
        align-items: center;
        font-size: #{scaleValue(12)};
        font-weight: 300;
        padding: #{scaleValue(5)} 0;

        border-top: 1px solid rgba(#fff, .2);

        @media only screen and (max-width: 414px) { 
            font-size: #{scaleValue(60)}; 
            padding:  #{scaleValue(40)} #{scaleValue(20)};

            flex-direction: column;
            align-items: flex-start;
        }

        &--label {
            width: #{scaleValue(400)};
            display: flex;
            align-items: center;

            @media only screen and (max-width: 414px) { 
                width: 100%;
                margin-bottom: #{scaleValue(30)};
            }
        }

        &--logo {
            height: #{scaleValue(20)};
            width: #{scaleValue(20)};
            border-radius: 100%;
            overflow: hidden;
            margin-right: #{scaleValue(10)};

            @media only screen and (max-width: 414px) { 
                height: #{scaleValue(100)};
                width: #{scaleValue(100)};

                margin-right: #{scaleValue(30)};
            }

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &--area {
            width: #{scaleValue(200)};

            @media only screen and (max-width: 414px) { 
                width: 100%;
                padding: #{scaleValue(20)};
            }

            & span {

                &.mobilelabel {
                    display: none;

                    @media only screen and (max-width: 414px) { 
                        display: inline-block;
                        margin-right: #{scaleValue(20)};
                        color: green;
                    }
                }
            }
        }

        & button.verification {
            background: #1C2230;
            padding: #{scaleValue(10)} #{scaleValue(15)};
            border-radius: .6rem;
            font-size: #{scaleValue(12)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(50)};
                padding: #{scaleValue(18)} 0;
                text-align: left;

                margin-top: #{scaleValue(50)};
                background: transparent;
                color: rgba(0, 180, 201, 0.6);
                line-height: #{scaleValue(70)};
            }
        }
    }
}
</style>

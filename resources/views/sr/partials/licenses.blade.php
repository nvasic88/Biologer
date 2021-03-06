<div class="columns">
    <div class="column">
        <div class="field is-required">
            <label class="label">Коришћење података</label>
            <p>Изаберите један од начина на који желите да делите своје податке.</p>
            <div class="control">
                @if (\App\License::isEnabled(\App\License::CC_BY_SA))
                    <b-tooltip
                        label="Избором ове опције слажете се да делите све податке о
                            налазима врста (осим у случају угрожених врста за чији
                            приказ таксономски експерти одлуче да ограничеприказ)."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::CC_BY_SA }}"{{ $dataLicense == \App\License::CC_BY_SA ? ' checked' : '' }}>
                            Јавно доступни подаци (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::OPEN))
                    <b-tooltip
                        label="Избором ове опције слажете се да делите све податке о
                            налазима врста (осим у случају угрожених врста за чији
                            приказ таксономски експерти одлуче да ограничеприказ)."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::OPEN }}"{{ $dataLicense == \App\License::OPEN ? ' checked' : '' }}>
                            Јавно доступни подаци (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CC_BY_NC_SA))
                    <b-tooltip
                        label="Слично горе наведеној лиценци, али онемогућава комерцијалну употребу
                            података без ваше сагласности. Ваши подаци ће бити доступни за потребе
                            заштите биодиверзитета и израду научних студија."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::CC_BY_NC_SA }}"{{ $dataLicense == \App\License::CC_BY_NC_SA ? ' checked' : '' }}>
                            Јавно доступни подаци (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-некомерцијално-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::PARTIALLY_OPEN))
                    <b-tooltip
                        label="Слично као горе наведене лиценце, само што се подаци јавно приказују
                            у виду квадрата величине 10×10 km. Детаљнији подаци ће бити доступни
                            вама, администраторима веб странице и таксономским експертима."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::PARTIALLY_OPEN }}"{{ $dataLicense == \App\License::PARTIALLY_OPEN ? ' checked' : '' }}>
                            Делимично доступни подаци (на нивоу квадрата величине 10x10 km). <a href="{{ route('licenses.partially-open-license') }}" target="_blank">Детаљније</a>
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CLOSED_FOR_A_PERIOD))
                    <b-tooltip
                        label="Не препоручујемо избор ове опције. Само ви, администратори
                            и таксономски експерти ће моћи да виде податке."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::CLOSED_FOR_A_PERIOD }}"{{ $dataLicense == \App\License::CLOSED_FOR_A_PERIOD ? ' checked' : '' }}>
                            Скривени подаци (подаци се не приказују на мапама). <a href="{{ route('licenses.closed-license') }}" target="_blank">Детаљније</a>
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CLOSED))
                    <b-tooltip
                        label="Не препоручујемо избор ове опције. Само ви, администратори
                            и таксономски експерти ће моћи да виде податке."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="data_license" value="{{ \App\License::CLOSED }}"{{ $dataLicense == \App\License::CLOSED ? ' checked' : '' }}>
                            Скривени подаци (подаци се не приказују на мапама). <a href="{{ route('licenses.closed-license') }}" target="_blank">Детаљније</a>
                        </label>
                    </b-tooltip>
                @endif
            </div>
        </div>
    </div>

    <div class="column">
        <div class="field is-required">
            <label class="label">Коришћење фотографија</label>
            <p>Изаберите један од начина на који желите да делите своје фотографије.</p>
            <div class="control">
                @if (\App\License::isEnabled(\App\License::CC_BY_SA))
                    <b-tooltip
                        label="Избором ове опције слажете се да делите све фотографије које
                            пошаљете у базу. Тако послате слике се могу користити и делити
                            уз навођење имена аутора фотографије."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::CC_BY_SA }}"{{ $imageLicense == \App\License::CC_BY_SA ? ' checked' : '' }}>
                            Јавне фотографије (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::OPEN))
                    <b-tooltip
                        label="Избором ове опције слажете се да делите све фотографије које
                            пошаљете у базу. Тако послате слике се могу користити и делити
                            уз навођење имена аутора фотографије."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::OPEN }}"{{ $imageLicense == \App\License::OPEN ? ' checked' : '' }}>
                            Јавне фотографије (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CC_BY_NC_SA))
                    <b-tooltip
                        label="Слично горе наведеној лиценци, али онемогућава комерцијалну
                            употребу фотографија без ваше сагласности."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::CC_BY_NC_SA }}"{{ $imageLicense == \App\License::CC_BY_NC_SA ? ' checked' : '' }}>
                            Јавне фотографије (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Кријејтив комонс лиценца, ауторство-некомерцијално-делити под истим условима</a>)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::PARTIALLY_OPEN))
                    <b-tooltip
                        label="Избором ове опције слажете се да ваше фотографије буду приказане на
                            веб страници, али не дозвољавате њихову даљу употребу без ваше сагласности.
                            Слике ће добити водени жиг са подацима о лиценци и логом веб странице."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::PARTIALLY_OPEN }}"{{ $imageLicense == \App\License::PARTIALLY_OPEN ? ' checked' : '' }}>
                            Фотографије доступне само на овој страници (задржавајући ауторство)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CLOSED_FOR_A_PERIOD))
                    <b-tooltip
                        label="Не препоручујемо избор ове опције. Само ви, администратори и
                            таксономски експерти ће моћи да виде фотографије, због чега остали
                            корисници веб странице не могу проверити тачност ваших налаза."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::CLOSED_FOR_A_PERIOD }}"{{ $imageLicense == \App\License::CLOSED_FOR_A_PERIOD ? ' checked' : '' }}>
                            Скривене фотографије (слике се уопште не приказују у јавном делу)
                        </label>
                    </b-tooltip>
                @endif

                @if (\App\License::isEnabled(\App\License::CLOSED))
                    <b-tooltip
                        label="Не препоручујемо избор ове опције. Само ви, администратори и
                            таксономски експерти ће моћи да виде фотографије, због чега остали
                            корисници веб странице не могу проверити тачност ваших налаза."
                        multilined>
                        <label class="radio">
                            <input type="radio" name="image_license" value="{{ \App\License::CLOSED }}"{{ $imageLicense == \App\License::CLOSED ? ' checked' : '' }}>
                            Скривене фотографије (слике се уопште не приказују у јавном делу)
                        </label>
                    </b-tooltip>
                @endif
            </div>
        </div>
    </div>
</div>

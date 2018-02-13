<b-dropdown position="is-top-right" class="is-right" v-cloke>
    <button class="button" slot="trigger">
        <span>{{ LaravelLocalization::getCurrentLocaleNative() }}</span>
        <b-icon icon="angle-up"></b-icon>
    </button>

    @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
        <a href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}"
            rel="alternate"
            hreflang="{{ $localeCode }}"
            class="dropdown-item"
        >{{ __('languages.'.$properties['name']) }} ({{ $properties['native'] }})</a>
    @endforeach
</b-dropdown>

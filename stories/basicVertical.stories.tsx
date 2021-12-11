import React, { useEffect, useRef } from 'react';
import { useScrollDirection } from '../src/useScrollDirection';

export default {
  title: 'Basic usage Y axis',
  component: useScrollDirection,
};

export const WindowObject = () => {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);

  return (
    <div style={{ width: '400px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et felis
      maximus magna placerat pellentesque. Aliquam eu tristique libero. Quisque
      aliquet dui neque, a lobortis mi posuere quis. In id purus et nisl
      ultrices bibendum quis a mi. Quisque sit amet justo erat. Cras condimentum
      pretium odio vitae interdum. Vestibulum sed felis iaculis, volutpat lacus
      sit amet, eleifend ex. Donec neque magna, rutrum quis scelerisque sit
      amet, maximus a tortor. Aenean a risus facilisis, facilisis nisl ut,
      luctus turpis. Curabitur laoreet gravida congue. Integer condimentum augue
      eu ante lobortis semper. Donec non odio eget justo sagittis fermentum a
      non nisl. Fusce ac orci massa. Ut egestas fringilla convallis. Nam non
      lorem lacinia, tincidunt eros efficitur, iaculis leo. Sed purus diam,
      interdum ac egestas vitae, pulvinar et ante. Nunc laoreet elementum urna
      ut luctus. Donec id purus sapien. Phasellus iaculis ipsum sapien, non
      ullamcorper mauris ultrices ac. Fusce sit amet semper dui. Sed aliquam,
      sem nec auctor eleifend, risus ante vehicula leo, mattis maximus massa
      ipsum quis leo. Vestibulum euismod cursus sapien in semper. Donec et purus
      sollicitudin, sagittis leo eu, feugiat sem. Curabitur euismod mi vel est
      pulvinar lobortis. Phasellus molestie nisl nec tincidunt suscipit. Mauris
      vitae iaculis urna. Sed viverra bibendum justo, at pulvinar sapien
      tincidunt at. Cras in tellus ligula. Aenean sed sem efficitur, aliquam
      turpis et, maximus neque. Phasellus imperdiet tortor odio, et porttitor
      orci porttitor nec. Curabitur sit amet risus ut metus imperdiet semper.
      Sed ornare, nulla ut suscipit feugiat, dolor libero aliquam ex, eu
      fringilla diam sapien sed diam. Vestibulum sed orci nec dolor semper
      varius. Maecenas vulputate gravida lacus quis rutrum. Donec magna lorem,
      efficitur nec euismod id, pharetra a neque. Donec vel erat sed libero
      cursus feugiat vel ut purus. Nunc luctus turpis et justo convallis
      viverra. Vestibulum id efficitur turpis. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Nullam eu
      condimentum risus. Vestibulum posuere feugiat massa, quis lacinia turpis
      posuere at. Sed commodo congue diam, a venenatis nulla lacinia eu. Nam
      orci risus, imperdiet luctus massa et, fermentum accumsan erat.
      Suspendisse sagittis tempus risus vel condimentum. Praesent neque tellus,
      rutrum non lobortis lobortis, porta sit amet dolor. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nam et felis maximus magna placerat
      pellentesque. Aliquam eu tristique libero. Quisque aliquet dui neque, a
      lobortis mi posuere quis. In id purus et nisl ultrices bibendum quis a mi.
      Quisque sit amet justo erat. Cras condimentum pretium odio vitae interdum.
      Vestibulum sed felis iaculis, volutpat lacus sit amet, eleifend ex. Donec
      neque magna, rutrum quis scelerisque sit amet, maximus a tortor. Aenean a
      risus facilisis, facilisis nisl ut, luctus turpis. Curabitur laoreet
      gravida congue. Integer condimentum augue eu ante lobortis semper. Donec
      non odio eget justo sagittis fermentum a non nisl. Fusce ac orci massa. Ut
      egestas fringilla convallis. Nam non lorem lacinia, tincidunt eros
      efficitur, iaculis leo. Sed purus diam, interdum ac egestas vitae,
      pulvinar et ante. Nunc laoreet elementum urna ut luctus. Donec id purus
      sapien. Phasellus iaculis ipsum sapien, non ullamcorper mauris ultrices
      ac. Fusce sit amet semper dui. Sed aliquam, sem nec auctor eleifend, risus
      ante vehicula leo, mattis maximus massa ipsum quis leo. Vestibulum euismod
      cursus sapien in semper. Donec et purus sollicitudin, sagittis leo eu,
      feugiat sem. Curabitur euismod mi vel est pulvinar lobortis. Phasellus
      molestie nisl nec tincidunt suscipit.
    </div>
  );
};

WindowObject.story = {
  name: 'On window object',
};

export const RefObject = () => {
  const containerRef = useRef(null);
  const scrollDirection = useScrollDirection({ ref: containerRef });

  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);

  return (
    <div
      ref={containerRef}
      style={{ width: '400px', height: '100vh', overflowY: 'scroll' }}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et felis
        maximus magna placerat pellentesque. Aliquam eu tristique libero.
        Quisque aliquet dui neque, a lobortis mi posuere quis. In id purus et
        nisl ultrices bibendum quis a mi. Quisque sit amet justo erat. Cras
        condimentum pretium odio vitae interdum. Vestibulum sed felis iaculis,
        volutpat lacus sit amet, eleifend ex. Donec neque magna, rutrum quis
        scelerisque sit amet, maximus a tortor. Aenean a risus facilisis,
        facilisis nisl ut, luctus turpis. Curabitur laoreet gravida congue.
        Integer condimentum augue eu ante lobortis semper. Donec non odio eget
        justo sagittis fermentum a non nisl. Fusce ac orci massa. Ut egestas
        fringilla convallis. Nam non lorem lacinia, tincidunt eros efficitur,
        iaculis leo. Sed purus diam, interdum ac egestas vitae, pulvinar et
        ante. Nunc laoreet elementum urna ut luctus. Donec id purus sapien.
        Phasellus iaculis ipsum sapien, non ullamcorper mauris ultrices ac.
        Fusce sit amet semper dui. Sed aliquam, sem nec auctor eleifend, risus
        ante vehicula leo, mattis maximus massa ipsum quis leo. Vestibulum
        euismod cursus sapien in semper. Donec et purus sollicitudin, sagittis
        leo eu, feugiat sem. Curabitur euismod mi vel est pulvinar lobortis.
        Phasellus molestie nisl nec tincidunt suscipit. Mauris vitae iaculis
        urna. Sed viverra bibendum justo, at pulvinar sapien tincidunt at. Cras
        in tellus ligula. Aenean sed sem efficitur, aliquam turpis et, maximus
        neque. Phasellus imperdiet tortor odio, et porttitor orci porttitor nec.
        Curabitur sit amet risus ut metus imperdiet semper. Sed ornare, nulla ut
        suscipit feugiat, dolor libero aliquam ex, eu fringilla diam sapien sed
        diam. Vestibulum sed orci nec dolor semper varius. Maecenas vulputate
        gravida lacus quis rutrum. Donec magna lorem, efficitur nec euismod id,
        pharetra a neque. Donec vel erat sed libero cursus feugiat vel ut purus.
        Nunc luctus turpis et justo convallis viverra. Vestibulum id efficitur
        turpis. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam eu condimentum risus. Vestibulum posuere
        feugiat massa, quis lacinia turpis posuere at. Sed commodo congue diam,
        a venenatis nulla lacinia eu. Nam orci risus, imperdiet luctus massa et,
        fermentum accumsan erat. Suspendisse sagittis tempus risus vel
        condimentum. Praesent neque tellus, rutrum non lobortis lobortis, porta
        sit amet dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam et felis maximus magna placerat pellentesque. Aliquam eu tristique
        libero. Quisque aliquet dui neque, a lobortis mi posuere quis. In id
        purus et nisl ultrices bibendum quis a mi. Quisque sit amet justo erat.
        Cras condimentum pretium odio vitae interdum. Vestibulum sed felis
        iaculis, volutpat lacus sit amet, eleifend ex. Donec neque magna, rutrum
        quis scelerisque sit amet, maximus a tortor. Aenean a risus facilisis,
        facilisis nisl ut, luctus turpis. Curabitur laoreet gravida congue.
        Integer condimentum augue eu ante lobortis semper. Donec non odio eget
        justo sagittis fermentum a non nisl. Fusce ac orci massa. Ut egestas
        fringilla convallis. Nam non lorem lacinia, tincidunt eros efficitur,
        iaculis leo. Sed purus diam, interdum ac egestas vitae, pulvinar et
        ante. Nunc laoreet elementum urna ut luctus. Donec id purus sapien.
        Phasellus iaculis ipsum sapien, non ullamcorper mauris ultrices ac.
        Fusce sit amet semper dui. Sed aliquam, sem nec auctor eleifend, risus
        ante vehicula leo, mattis maximus massa ipsum quis leo. Vestibulum
        euismod cursus sapien in semper. Donec et purus sollicitudin, sagittis
        leo eu, feugiat sem. Curabitur euismod mi vel est pulvinar lobortis.
        Phasellus molestie nisl nec tincidunt suscipit.
      </div>
    </div>
  );
};

RefObject.story = {
  name: 'On ref object',
};

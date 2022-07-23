import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface ITitle {
  title?: string;
}

interface TitleProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type PersonProps = {
  firstname: string;
  lastname: string;
  isFavourite: boolean;
  profilePicture: string;
};

const Title: React.FC<TitleProps> = ({ onClick }) => {
  const [title, setTitle] = useState<ITitle>({ title: '' });
  const [person, setPerson] = useState<PersonProps>({
    firstname: '',
    lastname: '',
    isFavourite: true,
    profilePicture: ''
  });

  const inputRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const handlePersonChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    return setPerson((prevPerson) => ({
      ...prevPerson,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    inputRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
    setTitle({ title: 'name' });
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  const elem = React.createElement(
    'ul',
    {},
    React.createElement('li', {}, React.createElement('span', {}, 'Hello'))
  );

  const numbers: number[] = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, i) => <li key={i}>{number}</li>);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div onClick={onClick} ref={inputRef}>
      title: {title.title} {elem}
      {listItems}
      <input />
      <Button ref={buttonRef} />
      <Input ref={ref} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur
        voluptatem libero repellendus dicta magni itaque veritatis eum eaque
        reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium, dolores? Blanditiis, ipsam nemo. Aliquid recusandae vel
        dicta laudantium nobis delectus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est, porro iste sit aliquid itaque necessitatibus
        distinctio dolore nulla reprehenderit eaque expedita, atque corrupti,
        veritatis a? Debitis voluptatum ipsam incidunt iusto veniam nihil,
        saepe, officiis voluptas excepturi nobis ratione nulla voluptatibus
        possimus, quia eaque doloremque vel temporibus. Iusto necessitatibus
        quia modi officiis ipsam nobis eum accusamus facilis, expedita,
        cupiditate illo, voluptas atque iste incidunt laboriosam. Qui ea
        consequatur odit est, fugit explicabo atque culpa. Cum, voluptate
        deserunt eveniet vitae deleniti repellat iste error nulla at
        perspiciatis blanditiis obcaecati temporibus expedita soluta
        necessitatibus quisquam voluptates et, distinctio quibusdam inventore
        earum illum. Nihil neque consequuntur exercitationem sed temporibus id,
        vero ex possimus nam, suscipit asperiores odio iusto, similique ut est
        officia quibusdam sapiente vitae rerum ducimus accusantium. Iure vitae
        natus, vel necessitatibus quidem autem nulla! Magni error inventore,
        quasi rem, voluptate id temporibus eius doloremque atque placeat neque
        iure accusantium voluptatem possimus modi accusamus est numquam earum.
        Praesentium voluptatum dolorem earum eius maiores nemo, veritatis
        ducimus ex doloribus, optio sapiente! Velit sequi vel explicabo
        aspernatur ut distinctio eos earum odio minima cumque, veniam dolorum
        harum hic ex tenetur asperiores enim nemo ea sunt. Nam quia, quibusdam
        non maiores facere quisquam sequi tenetur dolores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur
        voluptatem libero repellendus dicta magni itaque veritatis eum eaque
        reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium, dolores? Blanditiis, ipsam nemo. Aliquid recusandae vel
        dicta laudantium nobis delectus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est, porro iste sit aliquid itaque necessitatibus
        distinctio dolore nulla reprehenderit eaque expedita, atque corrupti,
        veritatis a? Debitis voluptatum ipsam incidunt iusto veniam nihil,
        saepe, officiis voluptas excepturi nobis ratione nulla voluptatibus
        possimus, quia eaque doloremque vel temporibus. Iusto necessitatibus
        quia modi officiis ipsam nobis eum accusamus facilis, expedita,
        cupiditate illo, voluptas atque iste incidunt laboriosam. Qui ea
        consequatur odit est, fugit explicabo atque culpa. Cum, voluptate
        deserunt eveniet vitae deleniti repellat iste error nulla at
        perspiciatis blanditiis obcaecati temporibus expedita soluta
        necessitatibus quisquam voluptates et, distinctio quibusdam inventore
        earum illum. Nihil neque consequuntur exercitationem sed temporibus id,
        vero ex possimus nam, suscipit asperiores odio iusto, similique ut est
        officia quibusdam sapiente vitae rerum ducimus accusantium. Iure vitae
        natus, vel necessitatibus quidem autem nulla! Magni error inventore,
        quasi rem, voluptate id temporibus eius doloremque atque placeat neque
        iure accusantium voluptatem possimus modi accusamus est numquam earum.
        Praesentium voluptatum dolorem earum eius maiores nemo, veritatis
        ducimus ex doloribus, optio sapiente! Velit sequi vel explicabo
        aspernatur ut distinctio eos earum odio minima cumque, veniam dolorum
        harum hic ex tenetur asperiores enim nemo ea sunt. Nam quia, quibusdam
        non maiores facere quisquam sequi tenetur dolores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur
        voluptatem libero repellendus dicta magni itaque veritatis eum eaque
        reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium, dolores? Blanditiis, ipsam nemo. Aliquid recusandae vel
        dicta laudantium nobis delectus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Est, porro iste sit aliquid itaque necessitatibus
        distinctio dolore nulla reprehenderit eaque expedita, atque corrupti,
        veritatis a? Debitis voluptatum ipsam incidunt iusto veniam nihil,
        saepe, officiis voluptas excepturi nobis ratione nulla voluptatibus
        possimus, quia eaque doloremque vel temporibus. Iusto necessitatibus
        quia modi officiis ipsam nobis eum accusamus facilis, expedita,
        cupiditate illo, voluptas atque iste incidunt laboriosam. Qui ea
        consequatur odit est, fugit explicabo atque culpa. Cum, voluptate
        deserunt eveniet vitae deleniti repellat iste error nulla at
        perspiciatis blanditiis obcaecati temporibus expedita soluta
        necessitatibus quisquam voluptates et, distinctio quibusdam inventore
        earum illum. Nihil neque consequuntur exercitationem sed temporibus id,
        vero ex possimus nam, suscipit asperiores odio iusto, similique ut est
        officia quibusdam sapiente vitae rerum ducimus accusantium. Iure vitae
        natus, vel necessitatibus quidem autem nulla! Magni error inventore,
        quasi rem, voluptate id temporibus eius doloremque atque placeat neque
        iure accusantium voluptatem possimus modi accusamus est numquam earum.
        Praesentium voluptatum dolorem earum eius maiores nemo, veritatis
        ducimus ex doloribus, optio sapiente! Velit sequi vel explicabo
        aspernatur ut distinctio eos earum odio minima cumque, veniam dolorum
        harum hic ex tenetur asperiores enim nemo ea sunt. Nam quia, quibusdam
        non maiores facere quisquam sequi tenetur dolores?
      </p>
    </div>
  );
};

export default Title;

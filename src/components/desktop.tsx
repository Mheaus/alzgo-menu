import { cn } from '../utils/cn';
import { NavbarItem } from '../types/navbar-item';
import Icon from './icon';

interface CategoryItemProps {
  item: NavbarItem;
}

function CategoryItem({ item }: CategoryItemProps) {
  const hasManyChildren = (item.children?.length || 0) > 6;
  return (
    <li
      className={cn(
        'text-base',
        hisManyChildren && 'row-span-2'
        // Add Row-span if too much children
      )}
    >
      <img src={item.img} className="lg:w-20" />

      <p className="mb-2 mt-4 font-semibold text-black">{item.label}</p>

      <ul>
        {item.children?.map((grandChild) => (
          <li className="text-sm" key={grandChild.id}>
            <a className="font-normal text-black hover:text-second_blue" href={grandChild.to} key={grandChild.id}>
              {grandChild.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

interface ParentMenuItemProps {
  parent: NavbarItem;
}

function DesktopNavItem({ parent }: ParentMenuItemProps) {
  const hasChildren = parent.children && parent.children.length > 0;

  return (
    <li className="group relative h-full">
      <a
        href={parent.to}
        key={parent.id}
        className="flex size-full items-center gap-1 p-2 text-lg font-semibold text-white transition hover:!text-second_blue"
      >
        {parent.label}

        {hasChildren && <Icon name="chevron-down" className="size-4 transition duration-200 group-hover:rotate-180" />}
      </a>

      {hasChildren && (
        <div
          ref={(el) => {
            if (!el || el.style.left) return;

            /**
             * This is a workaround to center the dropdown menu.
             */
            el.style.left = `-${el.getBoundingClientRect().x - window.innerWidth * 0.1}px`;
          }}
          className={cn(
            'absolute top-3/4 w-[80vw] pt-2', // fixed position
            // transition based on group hover
            'z-0 h-0 translate-y-8 overflow-hidden opacity-0 transition-all duration-200', // default state
            'group-hover:z-10 group-hover:grid group-hover:h-[80vh] group-hover:translate-y-0 group-hover:overflow-visible group-hover:opacity-100'
          )}
        >
          <ul
            className={cn(
              'size-full overflow-auto rounded-sm bg-white p-8 pb-32 shadow',
              'grid grid-cols-5 grid-rows-[repeat(minmax(1fr,150px),3)] gap-8' // grid layout
            )}
          >
            {parent.children!.map(
              (child) => child.children && child.children.length > 0 && <CategoryItem key={child.id} item={child} />
            )}
          </ul>
        </div>
      )}
    </li>
  );
}

export default DesktopNavItem;

import cls from './Header.module.scss'
export const Header = () => {
	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<h1>User table</h1>
			</div>
		</header>
	)
}

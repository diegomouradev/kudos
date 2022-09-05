export function LoginPrompt() {
	return (
		<main>
			<section>
				<p>please enter username and password</p>
				<form>
					<div>
						<label htmlFor="username">Username</label>
						<input id="username" type="text" required />
					</div>

					<div>
						<label htmlFor="password">Password</label>
						<input id="password" type="password" required />
					</div>
					<input type="submit" value="submit" />
				</form>
			</section>
		</main>
	);
}

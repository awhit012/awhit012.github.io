shape_goes_pseudo

objectives:

object MAP
	
	MAP has
	
		1st PORTAL

		2nd PORTAL

		object SHAPE

			startLocation: 1st Portal
	
			can move
	
				direction
					up
				    down
					left
					right
				
				speed
					100 px per turn
			
			can think?

			can get sent back to start

			if sent back to start > 3

				can get sent back to another dimension

			

			if location = 2nd portal

				can transcend


			can pick up MORPH
				
				MORPHS
					
					BUTTERFLY

					NOUGAT
	
		BADDIES

			location.random 

			ammount.random(between 2-4)

			BADDIES CAN

				send SHAPE back to start

				send SHAPE back to another dimension

				move
					SHAPE.direction towards SHAPE

					speed
						150 px per turn				

	MAP can 

		make MORPHS

			which.random(BUTTERFLY, NOUGAT)
				BUTTERFLY 2x as often as NOUGAT

			make BUTTERFLY

				location.random

				BUTTERLY can
							move (fly)
								SHAPE.move

								speed 
									125 px per turn

							leave FLOWERS
								FLOWERS 
									
									is tile 
										tile = 100 px * 100 px 

									BADDIES.speed(125 px per turn)


					make NOUGAT

						NOUGAT can
							move (teleport)
								SHAPE.direction

								speed
									300 px per 2 turns

							leave STICKY
								STICKY
									is tile
										tile = 100 px * 100 px
									BADDIES.speed(0 px for 1 turn)



